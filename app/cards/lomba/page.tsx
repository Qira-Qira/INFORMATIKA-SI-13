import CardPage from "../[slug]/page"

export default function LombaPage() {
  // delegate to the dynamic card page with the matching slug
  return <CardPage params={{ slug: 'lomba' }} />
}
