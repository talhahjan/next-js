import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const slug = router.query.slug;
  const section = router.query.section;
  const category = router.query.category;
  return (
    <h1 style={{ marginTop: "100px" }}>
      Details about product {slug} {section} {category}
    </h1>
  );
}

export default ProductDetail;
