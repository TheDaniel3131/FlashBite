import NewSectionHeaders from "@/components/layout/newSectionHeaders"
import { Phone } from 'lucide-react';

export default function ContactUs(){
    return(
        <>
      <section className="flex flex-col text-center items-center my-12">
        <NewSectionHeaders mainHeader={'Contact Us'} subHeader={'We Welcome Any Inquiries!'} />
        <div className="mt-8">
          <a className="text-2xl text-center underline text-slate-500 flex justify-between items-center" href="tel:+60108483602">
            +60 10-848 3602 (WhatsApp)
            <Phone />
          </a>
        </div>
      </section>
      </>
    )
}