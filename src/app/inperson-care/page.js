import Footer from "@/components/footer/Footer";
import NavSwitcher from "@/components/navswitcher/NavSwitcher";
import Cta from "@/components/cta/Cta";
import InpersonBanner from "@/components/inpersonBanner/InpersonBanner";
import DoctorListing from "@/components/doctorListing/DoctorListing";

const page = async (params) => {
    const { locale } = params;

    const data =
        locale === "ur"
            ? (await import("@/app/data/ur.json")).default
            : (await import("@/app/data/en.json")).default;
    return (
        <div>
            <NavSwitcher data={data} />
            <InpersonBanner data={data} />
            <DoctorListing data={data} />
            <Cta data={data} />
            <Footer data={data} />
        </div>
    );
};

export default page;
