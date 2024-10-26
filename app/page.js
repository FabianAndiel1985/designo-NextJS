import AttributeElements from "@/components/Main/AttributeElements";
import { TextBox } from "@/components/Main/TextBox";
import { attributeElementContent } from "@/mocks/AttributeData";
import { ServiceBoxes } from "@/components/Main/ServiceBoxes";
import { TopBox } from "@/components/Main/TopBox";



export default function Home() {
  return (
    <> 
      <main>
        <TopBox/>
        <ServiceBoxes/>
        <AttributeElements attributeElements={attributeElementContent}/>        
        <TextBox/>
      </main>
    </>
  );
}
