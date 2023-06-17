import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Link } from "react-router-dom";
import { useState } from 'react';
import useCourcess from '../../Hooks/useCourcess';
import CouressCard from '../../Components/CouressCard/CouressCard';
import { Helmet } from 'react-helmet';

const AllCources = () => {
    const [tabIndex,setTabIndex]=useState(0)
    const [courcess]=useCourcess()


    const Piano = courcess.filter(item=>item.instrumentName==='Piano')
       console.log(Piano)
    const Guitar = courcess.filter(item=>item.instrumentName==='Guitar')
       console.log(Guitar)
    const Violin = courcess.filter(item=>item.instrumentName==='Violin')
    const Drums = courcess.filter(item=>item.instrumentName==='Drums')

    const Saxophone = courcess.filter(item=>item.instrumentName==='Saxophone')
    const Vocal = courcess.filter(item=>item.instrumentName==='Vocal')


    return (

        
<div>
    <Helmet>
                <title>Summer Camp || ALL CLASS</title>
            </Helmet>
 
<h3 className="lg:text-4xl mt-10 text-3xl text-blue-500 lg:p-3 p-2 font-bold text-center"> Our Cources</h3>


<Tabs defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>

        <TabList>
          <Tab>Piano</Tab>
          <Tab>Guiter</Tab>
          <Tab>Violin</Tab>
          <Tab>Drums</Tab>
          <Tab>Saxophone</Tab>
          <Tab>Vocal</Tab>
        </TabList>
    


        <TabPanel>
            <div className='grid grid-flow-row xl:grid-cols-3 md:grid-cols-2 justify-center'>

{
Piano.map(item=><CouressCard item={item} key={item.id}></CouressCard>)
}

</div>


        </TabPanel>

        <TabPanel>
        
<div className='grid grid-flow-row xl:grid-cols-3 md:grid-cols-2 justify-center'>

{
Guitar.map(item=><CouressCard item={item} key={item.id}></CouressCard>)
}

</div>




        </TabPanel>

        <TabPanel>


        <div className='grid grid-flow-row xl:grid-cols-3 md:grid-cols-2 justify-center'>
{
Violin.map(item=><CouressCard item={item} key={item.id}></CouressCard>)
}
</div>

        </TabPanel>

        <TabPanel>

   
        <div className='grid grid-flow-row xl:grid-cols-3 md:grid-cols-2 justify-center'>
{
Drums.map(item=><CouressCard item={item} key={item.id}></CouressCard>)
}
</div>

        </TabPanel>

        <TabPanel>

        <div className='grid grid-flow-row xl:grid-cols-3 md:grid-cols-2 justify-center'>
{
Saxophone.map(item=><CouressCard item={item} key={item._id}></CouressCard>)
}
</div>


        </TabPanel>

        <TabPanel>

        <div className='grid grid-flow-row xl:grid-cols-3 md:grid-cols-2 justify-center'>
{
Vocal.map(item=><CouressCard item={item} key={item.id}></CouressCard>)
}
</div>
        </TabPanel>
</Tabs>





        </div>
    );
};

export default AllCources;