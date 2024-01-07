import Footer from "@/common/components/Footer";
import Header from "@/common/components/Header";

const title = "Experimental";
export const metadata = {
  title: title,
};
export default function Index() {
  return (
    <>
      <Header title={title} />
      <Footer />
    </>
  );
}
