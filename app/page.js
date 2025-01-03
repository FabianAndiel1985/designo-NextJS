import AttributeElements from "@/components/Main/AttributeElements";
import { TextBox } from "@/components/Main/TextBox";
import { attributeElementContent } from "@/mocks/AttributeData";
import { ServiceBoxes } from "@/components/Main/ServiceBoxes";
import { TopBox } from "@/components/Main/TopBox";



export default function Home() {
  return (
  
    <> 
    <div className={"top-box-mobile"}>
      <TopBox/>
    </div>
      <div className={"home-container"}>
        <TopBox/>
        <ServiceBoxes/>
        <AttributeElements attributeElements={attributeElementContent}/>        
        <TextBox/>
      </div>
    </>
  );
}
