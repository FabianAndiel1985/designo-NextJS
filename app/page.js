import AttributeElements from "@/components/Main/AttributeElements";
import { TextBox } from "@/components/Main/TextBox";
import { attributeElementContent } from "@/mocks/AttributeData";
import { ServiceBoxes } from "@/components/Main/ServiceBoxes";



export default function Home() {
  return (
    <> 
      <main>
        <ServiceBoxes/>
        <AttributeElements attributeElements={attributeElementContent}/>        
        <TextBox/>
      </main>
    </>
  );
}
