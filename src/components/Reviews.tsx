import { getReviewsData } from "@/lib/bigquery";
import { shuffleArray } from "@/lib/utils/array";
import ReviewsClient from "./ReviewsClient";

interface ReviewsProps { }

export default async function Reviews({ }: ReviewsProps = {}) {
  const reviewsData = await getReviewsData();

  // Map BigQuery data to component props
  const reviews = reviewsData.map((review) => ({
    name: review.user_name,
    comment: review.comment,
    link: review.review_link,
    shop: review.shop_name,
  }));
  const shuffledReviews = shuffleArray(reviews);

  return <ReviewsClient reviews={shuffledReviews} />;
}
