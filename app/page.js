import AttributeElements from "@/components/Main/AttributeElements";
import { TextBox } from "@/components/Main/TextBox";
import { attributeElementContent } from "@/mocks/AttributeData";



export default function Home() {

  return (
    <> 
      <main>
    
        <AttributeElements attributeElements={attributeElementContent}/>        
        <TextBox/>
      </main>
    </>
  );
}
