import { getReviewsData } from "@/lib/bigquery";
// import { ReviewData } from "@/lib/bigquery-types";
import { shuffleArray } from "@/lib/utils/array";
import ReviewsClient from "./ReviewsClient";

export default async function Reviews({ locale = "en" }: { locale?: string }) {
  const reviewsData = await getReviewsData();

  // Map BigQuery data to component props
  const reviews = reviewsData.map((review) => ({
    name: review.user_name,
    comment: review.comment,
    link: review.review_link,
    shop: review.shop_name,
  }));
  const shuffledReviews = shuffleArray(reviews);

  return <ReviewsClient reviews={shuffledReviews} locale={locale} />;
}
