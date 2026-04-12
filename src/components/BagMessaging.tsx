"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { CartItem } from "@/lib/types";
import Link from "next/link";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";

const libraries: "places"[] = ["places"];

// Delivery configuration
const BASE_DELIVERY_FEE = 30;
const PER_KM_FEE = 10;
const NATIONWIDE_FEE = 500;
const FREE_DELIVERY_THRESHOLD = 2000;
const FALLBACK_FEE = 100;

const SHOP_LOCATION = {
  lat: parseFloat(process.env.NEXT_PUBLIC_SHOP_LAT || "7.7766"), // Rawai/Nai Harn area
  lng: parseFloat(process.env.NEXT_PUBLIC_SHOP_LNG || "98.3188"),
};

const deliveryZones = [
  {
    // ZONE 1 : (0-5km environ)
    keywords: ["rawai", "nai harn", "naiharn", "promthep", "ya nui", "sai yuan"],
    fee: 50,
  },
  {
    // ZONE 2 : (5-12km)
    keywords: ["chalong", "kata", "karon", "kata noi"],
    fee: 100,
  },
  {
    // ZONE 3 : (12-20km)
    keywords: [
      "patong",
      "phuket town",
      "phuket city",
      "mueang phuket",
      "talat yai",
      "talat nuea",
      "vichit",
      "panwa",
      "cape panwa",
      "kathu"
    ],
    fee: 200,
  },
  {
    // ZONE 4 : (20-35km)
    keywords: [
      "kamala",
      "surin",
      "bang tao",
      "bangtao",
      "thalang",
      "cherngtalay",
      "laguna",
      "pa klok",
      "koh kaew"
    ],
    fee: 350,
  },
  {
    // ZONE 5 : (35km+)
    keywords: [
      "airport",
      "mai khao",
      "maikhao",
      "nai yang",
      "naiyang",
      "naithon",
      "nai thon",
      "sa kaeo"
    ],
    fee: 400,
  },
];

function getZoneFee(locationName: string): number | null {
  const locLower = locationName.toLowerCase();
  for (const zone of deliveryZones) {
    if (zone.keywords.some((keyword) => locLower.includes(keyword))) {
      return zone.fee;
    }
  }
  return null;
}

// --- Subcomponent to handle the Maps API separately ---
interface AddressAutocompleteProps {
  locationName: string;
  onLocationChange: (
    name: string,
    url: string,
    distanceKm: number | null,
    isPhuket: boolean,
  ) => void;
}

const AddressAutocomplete = ({
  locationName,
  onLocationChange,
}: AddressAutocompleteProps) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const isValidKey = apiKey && apiKey !== "insert_key_here";

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: isValidKey ? apiKey : "",
    libraries,
    id: "google-maps-script",
  });

  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const calculateDistance = useCallback(
    (
      destination: google.maps.LatLng,
      placeName: string,
      placeUrl: string,
      isPhuket: boolean,
    ) => {
      if (!window.google) return;
      const service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [SHOP_LOCATION],
          destinations: [destination],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
        },
        (response, status) => {
          if (
            status === "OK" &&
            response &&
            response.rows[0].elements[0].status === "OK"
          ) {
            const distanceInMeters =
              response.rows[0].elements[0].distance.value;
            const distanceKm = Math.ceil(distanceInMeters / 1000);
            onLocationChange(placeName, placeUrl, distanceKm, isPhuket);
          } else {
            onLocationChange(placeName, placeUrl, null, isPhuket);
          }
        },
      );
    },
    [onLocationChange],
  );

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry && place.geometry.location) {
        const name = place.formatted_address || place.name || "";
        const url =
          place.url ||
          `https://www.google.com/maps/search/?api=1&query=${place.geometry.location.lat()},${place.geometry.location.lng()}`;

        let isPhuket = true;
        if (place.address_components) {
          isPhuket = place.address_components.some(
            (comp) =>
              comp.long_name.toLowerCase().includes("phuket") ||
              comp.short_name.includes("ภูเก็ต"),
          );
        } else {
          isPhuket =
            name.toLowerCase().includes("phuket") || name.includes("ภูเก็ต");
        }

        onLocationChange(name, url, null, isPhuket);
        calculateDistance(place.geometry.location, name, url, isPhuket);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const isPhuket =
      val.toLowerCase().includes("phuket") || val.includes("ภูเก็ต");
    onLocationChange(val, "", null, isPhuket);
  };

  if (loadError) {
    return (
      <div className="flex flex-col">
        <input
          type="text"
          value={locationName}
          onChange={handleInputChange}
          maxLength={255}
          placeholder="e.g. 123 Rawai Beach Road"
          className="w-full p-2 border-2 border-red-500 bg-black text-white focus:ring-2 focus:ring-red-500 focus:border-transparent mt-1"
          required
        />
        <p className="text-red-500 text-[10px] mt-1 italic">
          Error loading Google Maps. Please enter address manually.
        </p>
      </div>
    );
  }

  if (!isValidKey) {
    return (
      <div className="flex flex-col">
        <input
          type="text"
          value={locationName}
          onChange={handleInputChange}
          maxLength={255}
          placeholder="e.g. 123 Rawai Beach Road"
          className="w-full p-2 border-2 border-[#13DE00] bg-black text-white focus:ring-2 focus:ring-[#13DE00] focus:border-transparent mt-1"
          required
        />
        <p className="text-yellow-500 text-[10px] mt-1 italic">
          Maps API Key missing. Please provide manual entry.
        </p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <p className="text-[#13DE00] text-sm animate-pulse">Loading maps...</p>
    );
  }

  return (
    <Autocomplete
      onLoad={(autocomplete) => {
        autocompleteRef.current = autocomplete;
      }}
      onPlaceChanged={onPlaceChanged}
      options={{ componentRestrictions: { country: "th" } }}
    >
      <input
        type="text"
        value={locationName}
        onChange={handleInputChange}
        maxLength={255}
        placeholder="Search your address (Thailand only)"
        className="w-full p-2 border-2 border-[#13DE00] bg-black text-white focus:ring-2 focus:ring-[#13DE00] focus:border-transparent mt-1"
        required
      />
    </Autocomplete>
  );
};

interface BagMessagingProps {
  items: CartItem[];
  total: number;
  onClose: () => void;
}

const BagMessaging = ({ items, total, onClose }: BagMessagingProps) => {
  const [name, setName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"prepaid" | "cod">(
    "prepaid",
  );
  const [activeTab, setActiveTab] = useState<
    "whatsapp" | "messenger" | "telegram"
  >("whatsapp");

  // Consolidated location state from autocomplete
  const [locationName, setLocationName] = useState("");
  const [locationUrl, setLocationUrl] = useState("");
  const [distanceKm, setDistanceKm] = useState<number | null>(null);
  const [isPhuket, setIsPhuket] = useState<boolean>(true); // Default assume inside Phuket

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (!isPhuket) {
      setPaymentMethod("prepaid");
    }
  }, [isPhuket]);

  const handleLocationChange = useCallback(
    (name: string, url: string, distance: number | null, phuket: boolean) => {
      setLocationName(name);
      setLocationUrl(url);
      setDistanceKm(distance);
      setIsPhuket(phuket);
    },
    [],
  );

  let deliveryFee = 0;
  const zoneFee = getZoneFee(locationName);

  if (!isPhuket) {
    deliveryFee = NATIONWIDE_FEE;
  } else if (total >= FREE_DELIVERY_THRESHOLD) {
    deliveryFee = 0;
  } else if (zoneFee !== null) {
    deliveryFee = zoneFee;
  } else if (distanceKm !== null) {
    deliveryFee = BASE_DELIVERY_FEE + distanceKm * PER_KM_FEE;
  } else {
    deliveryFee = FALLBACK_FEE;
  }

  const grandTotal = total + deliveryFee;

  const getItemTotal = (item: CartItem) => {
    if (item.menuType === "Buds" || item.menuType === "Pre-rolls") {
      const basePrice =
        item.menuType === "Pre-rolls" ? item.price + 20 : item.price;
      if (item.quantity >= 30) return basePrice * item.quantity * 0.7; // 30% off
      if (item.quantity >= 10) return basePrice * item.quantity * 0.8; // 20% off
      if (item.quantity >= 5) return basePrice * (item.quantity - 1); // Buy 4 Get 1 Free
      return basePrice * item.quantity;
    }
    return item.price * item.quantity;
  };

  const orderDetails = `Name: ${name}\nDelivery Address: ${locationName}${locationUrl ? `\nMaps Link: ${locationUrl}` : ""}\nPayment Method: ${paymentMethod === "prepaid" ? "Pre-payment (Bank Transfer)" : "Cash on Delivery"}\n\nOrder Details:\n${items
    .map(
      (item) =>
        `${item.quantity} x ${item.name} (${item.menuType}) - ${getItemTotal(item)}฿`,
    )
    .join(
      "\n",
    )}\n\nSubtotal: ${total}฿\nDelivery Fee: ${deliveryFee}฿\nGrand Total: ${grandTotal}฿`;

  const getMessagingLink = () => {
    const message = encodeURIComponent(orderDetails);
    switch (activeTab) {
      case "messenger":
        return `https://m.me/greenghostdegenCBD?text=${message}`;
      case "telegram":
        return `https://t.me/+66874201144?text=${message}`;
      case "whatsapp":
      default:
        return `https://wa.me/66874201144?text=${message}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !locationName) return;
    window.open(getMessagingLink(), "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="fixed text-sm h-screen inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative shadow-xl max-w-lg w-full max-h-[95vh] overflow-hidden flex flex-col bg-black">
        <span className="absolute z-50 bg-black top-13 right-0 w-2 h-2"></span>
        <span className="absolute z-50 bg-black top-13 left-0 w-2 h-2"></span>
        <div className="flex justify-between items-center p-4 bg-[#13DE00] border-b-4 border-[#13DE00]">
          <h2 className="text-base md:text-lg font-bold text-black">
            Complete Your Order
          </h2>
          <button
            onClick={onClose}
            className="text-black hover:text-gray-700 text-2xl cursor-pointer font-pixel bg-transparent border-none"
            aria-label="Close order messaging selector"
          >
            X
          </button>
        </div>
        <div
          className="p-4 flex-1 overflow-y-auto border-4 border-[#13DE00] bg-black text-white relative"
          onScroll={() => window.dispatchEvent(new Event("resize"))} // Force Google Autocomplete dropdown to stick on scroll
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-1"
              >
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                className="w-full p-2 border-2 border-[#13DE00] bg-black text-white focus:ring-2 focus:ring-[#13DE00] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-white mb-1"
              >
                Delivery Address *
              </label>
              <AddressAutocomplete
                locationName={locationName}
                onLocationChange={handleLocationChange}
              />
            </div>

            <div>
              <label
                id="payment-method-label"
                className="block text-sm font-medium text-white mb-2"
              >
                Payment Method *
              </label>
              <div
                className="grid grid-cols-2 gap-2"
                role="radiogroup"
                aria-labelledby="payment-method-label"
              >
                <button
                  type="button"
                  role="radio"
                  aria-checked={paymentMethod === "prepaid"}
                  onClick={() => setPaymentMethod("prepaid")}
                  className={`p-2 text-sm border-2 ${paymentMethod === "prepaid" ? "bg-[#13DE00] text-black border-[#13DE00]" : "bg-black text-white border-gray-600"} hover:border-[#13DE00] transition-colors cursor-pointer`}
                >
                  Pre-payment
                </button>
                {isPhuket && (
                  <button
                    type="button"
                    role="radio"
                    aria-checked={paymentMethod === "cod"}
                    onClick={() => setPaymentMethod("cod")}
                    className={`p-2 text-sm border-2 ${paymentMethod === "cod" ? "bg-[#13DE00] text-black border-[#13DE00]" : "bg-black text-white border-gray-600"} hover:border-[#13DE00] transition-colors cursor-pointer`}
                  >
                    Cash on Delivery
                  </button>
                )}
              </div>

              <div className="mt-2 p-2 bg-gray-900 border border-gray-700 text-xs text-gray-300">
                {!isPhuket ? (
                  <p>
                    Deliveries outside of Phuket require Pre-payment. Please
                    attach the payment slip in the chat after sending your
                    order.{" "}
                    <Link
                      href="/payment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#13DE00] underline hover:text-white"
                    >
                      See bank details
                    </Link>
                  </p>
                ) : paymentMethod === "prepaid" ? (
                  <p>
                    Please attach the payment slip in the chat after sending
                    your order.{" "}
                    <Link
                      href="/payment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#13DE00] underline hover:text-white"
                    >
                      See bank details
                    </Link>
                  </p>
                ) : (
                  <p>Please prepare the exact amount in cash for the driver.</p>
                )}
              </div>
            </div>

            <div>
              <h3
                id="send-order-label"
                className="text-sm font-medium text-white mb-2"
              >
                Send Order Via
              </h3>
              <div
                className="grid grid-cols-3 gap-2"
                role="radiogroup"
                aria-labelledby="send-order-label"
              >
                {(["whatsapp", "messenger", "telegram"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    role="radio"
                    aria-checked={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                    className={`p-3 flex items-center justify-center space-x-2 text-[10px] md:text-sm text-white ${activeTab === tab
                      ? "bg-black border-2 border-[#13DE00]"
                      : "bg-black border-2 border-gray-600"
                      } hover:border-[#13DE00] cursor-pointer`}
                  >
                    <span className="capitalize">{tab}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Summary Section at the Bottom */}
            <div className="pt-4 mt-4 border-t-2 border-gray-800">
              <div className="flex justify-between items-center mb-1 text-gray-300">
                <span>Subtotal:</span>
                <span>{total}฿</span>
              </div>

              {/* Outside Phuket */}
              {!isPhuket ? (
                <>
                  <div className="flex justify-between items-center mb-4 text-gray-300">
                    <span>Delivery Fee (Nationwide):</span>
                    <span>{deliveryFee}฿</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t-2 border-gray-800">
                    <span className="text-base font-bold text-white">
                      Grand Total:
                    </span>
                    <span className="text-base font-bold text-[#13DE00]">
                      {grandTotal}฿
                    </span>
                  </div>
                </>
              ) : total >= 2000 ? (
                /* Free Delivery in Phuket (>= 2000 THB) */
                <>
                  <div className="flex justify-between items-center mb-4 text-[#13DE00]">
                    <span>Delivery Fee (Free over 2000฿):</span>
                    <span>FREE</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t-2 border-gray-800">
                    <span className="text-base font-bold text-white">
                      Grand Total:
                    </span>
                    <span className="text-base font-bold text-[#13DE00]">
                      {grandTotal}฿
                    </span>
                  </div>
                </>
              ) : distanceKm !== null ? (
                /* Inside Phuket: Dynamically Calculated via Maps API */
                <>
                  <div className="flex justify-between items-center mb-4 text-gray-300">
                    <span>Delivery Fee:</span>
                    <span>{deliveryFee}฿</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t-2 border-gray-800">
                    <span className="text-base font-bold text-white">
                      Grand Total:
                    </span>
                    <span className="text-base font-bold text-[#13DE00]">
                      {grandTotal}฿
                    </span>
                  </div>
                </>
              ) : (
                /* Inside Phuket: Missing Maps API Fallback */
                <>
                  <div className="flex justify-between items-center mb-4 text-gray-300">
                    <span>Delivery Fee (Flat Rate):</span>
                    <span>{deliveryFee}฿</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t-2 border-gray-800">
                    <span className="text-base font-bold text-white">
                      Grand Total:
                    </span>
                    <span className="text-base font-bold text-[#13DE00]">
                      {grandTotal}฿
                    </span>
                  </div>
                  {(!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
                    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ===
                    "insert_key_here") && (
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-[10px] text-yellow-500 italic">
                          Maps API required for precise distance calculation.
                        </span>
                      </div>
                    )}
                </>
              )}
            </div>

            <div className="pt-4 flex space-x-3 justify-end border-t border-gray-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-black bg-gray-200 hover:bg-gray-300 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!name || !locationName}
                className="px-4 py-2 text-sm font-medium text-black bg-[#13DE00] hover:bg-white hover:text-[#13DE00] disabled:opacity-50 disabled:cursor-not-allowed border border-[#13DE00] cursor-pointer"
              >
                Send Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BagMessaging;
