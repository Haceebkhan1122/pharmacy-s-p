import FaqsPage from '@/components/faqSemp/FaqSemp'
import NavSwitcher from '@/components/navswitcher/NavSwitcher';
import PageLoaderWrapper from '@/components/pageLoaderWrapper/PageLoaderWrapper';
import React from 'react'

export default async function LocalePage({ params }) {
    const { locale } = params;

    const data =
        locale === "ur"
            ? (await import("@/app/data/ur.json")).default
            : (await import("@/app/data/en.json")).default;
    return (
        <PageLoaderWrapper>
            <div>
                <NavSwitcher data={data} />
                <FaqsPage />
            </div>
        </PageLoaderWrapper>
    );
}