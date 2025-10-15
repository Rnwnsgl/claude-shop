import MainBanner from '@/components/common/MainBanner';
import CategorySection from '@/components/common/CategorySection';
import BestProducts from '@/components/common/BestProducts';
import PhotoReview from '@/components/common/PhotoReview';

export default function Home() {
  return (
    <div>
      {/* 1. 메인 배너 */}
      <MainBanner />

      {/* 2. 카테고리 아이콘 */}
      <CategorySection />

      {/* 3. 베스트 상품 */}
      <BestProducts />

      {/* 4. 포토리뷰 */}
      <PhotoReview />
    </div>
  );
}
