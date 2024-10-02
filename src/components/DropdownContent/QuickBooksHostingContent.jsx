import React from 'react'

const QuickBooksHostingContent = () => (
    <div className='p-2'>
      <h3 className="font-bold">QuickBooks Hosting</h3>
      <div className="grid grid-cols-2 gap-4 ">
        <ul className=' space-y-2'> 
          <li>QuickBooks Enterprise</li>
          <li>QuickBooks Pro</li>
          <li>QuickBooks Premier</li>
          <li>QuickBooks POS</li>
          <li>QuickBooks Add-ons Hosting</li>
          
        </ul>
        <ul className='space-y-2'>
          <li>QuickBooks Dedicated Server <span className="text-red-600 text-sm">New</span></li>
          <li>QuickBooks Accountant</li>
          <li>QuickBooks Canada</li>
          <li>QuickBooks Premier Contractor</li>
        </ul>
      </div>
      <div className='flex justify-between space-x-5 items-baseline mb-2 w-10/12 '>
        <div className="mt-4">
          <a href="#" className="text-red-600 hover:underline">Get Guided Demo →</a>
        </div>
        <div className="mt-2 ">
          <a href="#" className="text-red-600 hover:underline">See All QuickBooks Integrations →</a>
        </div>
      </div>

      
      <div className=" py-3 px-1 flex justify-between items-center">
        <div className="flex items-center space-x-1">
         
            <img src="https://cdn-dagec.nitrocdn.com/ePzgLhhJwNotwOpRheNTTKSGfbIUvwur/assets/images/source/rev-d086c4e/www.acecloudhosting.com/wp-content/uploads/2024/09/free-trial-icon.svg" alt="free trial " width={55} />
        
          <div>
            <p className="font-bold">Try Cloud Hosting</p>
            <a href="#" className="text-red-600 hover:underline">Get My Free Trial</a>
          </div>
        </div>
        <div className="flex items-center space-x-1">
         
          <div className='border-l mr-1 border h-20 '>
  
          </div>
          <img src="https://cdn-dagec.nitrocdn.com/ePzgLhhJwNotwOpRheNTTKSGfbIUvwur/assets/images/source/rev-d086c4e/www.acecloudhosting.com/wp-content/uploads/2024/09/offer.svg" alt="free trial " width={55} />
          <div>
            <p className="font-bold">Summer Offers</p>
            <a href="#" className="text-blue-600 hover:underline">Explore Now!</a>
          </div>
        </div>
        <div className="flex items-center space-x-1">
         
        <div className='border-l mr-1 border h-20 '>
  
  </div>

  <img src=" https://cdn-dagec.nitrocdn.com/ePzgLhhJwNotwOpRheNTTKSGfbIUvwur/assets/images/source/rev-d086c4e/www.acecloudhosting.com/wp-content/uploads/2024/08/call.svg" alt="free trial " width={55} />
 
          <div>
          <p className="font-bold">Call Us At</p>
          <a href="tel:+1-855-910-6927" className="text-green-600 hover:underline">+1-(855) 910-6927</a>
        </div></div>
        
      </div>
    </div>
  );

export default QuickBooksHostingContent;
