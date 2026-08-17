import { CloakingModal } from "@/components/CloakingModal";
import { HomePage } from "@/components/HomePage";
import { resolveVisitor } from "@/lib/visitor";

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const visitor = await resolveVisitor(params);

  return (
    <>
      <CloakingModal open={visitor.isOnline} visitId={visitor.gclid} />
      <HomePage />
    </>
  );
}
