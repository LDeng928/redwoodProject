import React from 'react';

const HomePage = () => {
  return (
    <>
      {/* Hero section */}
      <section className="relative">
          <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
              {/* Content  */}
              <div className="flex flex-1 flex-col items-center lg:items-start">
                  <h2 className="text-ntst-blue text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">Ventilator supplier</h2>
                  <p className="text-ntst-grey text-lg text-center lg:text-left mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam quaerat doloribus delectus ut eius optio eveniet illum soluta nemo perferendis totam, voluptatibus atque consequuntur nostrum temporibus rem veritatis? Corrupti.</p>
                  <div className="flex justify-center flex-wrap gap-6">
                      <button type="button" className="btn btn-purple hover:bg-ntst-white hover:text-black">Buy in store</button>
                      <button type="button" className="btn btn-white hover:bg-ntst-purple hover:text-white">Buy online</button>
                  </div>
              </div>

              {/* Image  */}
              <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                  <img className="w-5/6 h-5/6 rounded-md sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg" alt="" />
              </div>
          </div>
          {/* Rounded rectangle */}
          <div className="hidden md:block overflow-hidden bg-ntst-purple rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36"></div>
      </section>

      {/* Products Section */}
      <section className="bg-ntst-white py-20 mt-20 lg:mt-60">
          {/* Heading  */}
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
              <h1 className="text-3xl text-center text-ntst-blue">Products</h1>
              <p className="text-center text-ntst-grey mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero rerum repellendus eum, omnis commodi quod temporibus laboriosam nam labore vitae magnam beatae earum dignissimos magni saepe iste aperiam ex?</p>
          </div>

          {/* Product #1  */}
          <div className="relative mt-20 lg:mt-24">
              <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                  {/* Image  */}
                  <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                      <img src="https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_960_720.jpg" className="w-5/6 h-5/6 rounded-md sm:w-3/4 sm:h-3/4 md:w-full md:h-full" alt="" />
                  </div>
                  {/* Content  */}
                  <div className="flex flex-1 flex-col items-center lg:items-start">
                      <h1 className="text-3xl text-ntst-blue">Lorem ipsum</h1>
                      <p className="text-ntst-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, distinctio! Nemo amet expedita quod voluptas quaerat libero qui dolorem totam magni cumque, neque sapiente quasi delectus, fugiat vero. Odio, dicta!</p>
                      <button type="button" className="btn btn-purple hover:bg-ntst-white hover:text-black">More info</button>
                  </div>
              </div>
              {/* Rounded rectangle  */}
              <div className="hidden lg:block overflow-hidden bg-ntst-purple rounded-r-full absolute h-80 w-2/4 lg:-bottom-24 lg:-left-36"></div>
          </div>

            {/* Product #2  */}
            <div className="relative mt-20 lg:mt-52">
              <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                  {/* Image  */}
                  <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                      <img src="https://cdn.pixabay.com/photo/2018/07/13/10/20/cat-3535404_960_720.jpg" className="w-5/6 h-5/6 rounded-md sm:w-3/4 sm:h-3/4 md:w-full md:h-full" alt="" />
                  </div>
                  {/* Content  */}
                  <div className="flex flex-1 flex-col items-center lg:items-start">
                      <h1 className="text-3xl text-ntst-blue">Lorem ipsum</h1>
                      <p className="text-ntst-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, distinctio! Nemo amet expedita quod voluptas quaerat libero qui dolorem totam magni cumque, neque sapiente quasi delectus, fugiat vero. Odio, dicta!</p>
                      <button type="button" className="btn btn-purple hover:bg-ntst-white hover:text-black">More info</button>
                  </div>
              </div>
              {/* Rounded rectangle  */}
              <div className="hidden lg:block overflow-hidden bg-ntst-purple rounded-l-full absolute h-80 w-2/4 lg:-bottom-24 lg:-right-36"></div>
          </div>

          {/* Product #3  */}
          <div className="relative mt-20 lg:mt-52">
              <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                  {/* Image */}
                  <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                      <img src="https://cdn.pixabay.com/photo/2019/05/08/21/21/cat-4189697_960_720.jpg" className="w-5/6 h-5/6 rounded-md sm:w-3/4 sm:h-3/4 md:w-full md:h-full" alt="" />
                  </div>
                  {/* Content  */}
                  <div className="flex flex-1 flex-col items-center lg:items-start">
                      <h1 className="text-3xl text-ntst-blue">Lorem ipsum</h1>
                      <p className="text-ntst-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, distinctio! Nemo amet expedita quod voluptas quaerat libero qui dolorem totam magni cumque, neque sapiente quasi delectus, fugiat vero. Odio, dicta!</p>
                      <button type="button" className="btn btn-purple hover:bg-ntst-white hover:text-black">More info</button>
                  </div>
              </div>
              {/* Rounded rectangle  */}
              <div className="hidden lg:block overflow-hidden bg-ntst-purple rounded-r-full absolute h-80 w-2/4 lg:-bottom-24 lg:-left-36"></div>
          </div>
      </section>

      {/* Questions section */}
      <section className="bg-ntst-white py-20">
        <div className="container">
            {/* Heading */}
            <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 className="text-3xl text-center text-ntst-blue">Frequently asked questions</h1>
                <p className="text-center text-ntst-grey mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero rerum repellendus eum, omnis commodi quod temporibus laboriosam nam labore vitae magnam beatae earum dignissimos magni saepe iste aperiam ex?</p>
            </div>
            {/* FAQ items */}
            <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                <div className="flex items-center border-b py-4">
                    <span className="flex-1">Who are we?</span>
                    <i className="fas fa-chevron-down text-ntst-purple"></i>
                </div>
                <div className="flex items-center border-b py-4">
                    <span className="flex-1">How can we help?</span>
                    <i className="fas fa-chevron-down text-ntst-purple"></i>
                </div>
                <div className="flex items-center border-b py-4">
                    <span className="flex-1">How to buy?</span>
                    <i className="fas fa-chevron-down text-ntst-purple"></i>
                </div>
                <button type="button" className="flex self-center mt-12 btn btn-purple hover:bg-ntst-white hover:text-black">More info</button>
            </div>

        </div>
    </section>

      {/* Contact us */}
      <section className="bg-ntst-purple text-white py-20">
        <div className="container">
            <div className="sm:w-3/4 lg:w-2/4 mx-auto">
                <p className="uppercase font-light text-center mb-8">+35,000 clients across Canada</p>
                <h1 className="text-3xl text-center uppercase">Subscribe to our newsletter</h1>
                <div className="flex flex-col sm:flex-row gap-6 mt-8">
                    <input type="text" placeholder="Enter your email" className="focus:outline-none rounded-md flex-1 px-2 py-3 text-black" />
                    <button type="button" className="btn bg-ntst-red text-ntst-white rounded hover:bg-ntst-white hover:text-black">Contact us</button>
                </div>
            </div>
        </div>
    </section>


      {/* Footer */}
      <footer className="bg-ntst-blue py-8">
          <div className="container flex flex-col md:flex-row items-center">
              <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
              <div className="flex items-center  flex-shrink-0 text-white mr-6">
                <span className="font-bold text-xl">NTST</span>
              </div>
                  <ul className="flex text-white uppercase gap-12 text-xs">
                      <li className="cursor-pointer">Products</li>
                      <li className="cursor-pointer">Services</li>
                      <li className="cursor-pointer">Contact</li>
                  </ul>
              </div>

              <div className="flex gap-10 mt-12 md:mt-0">
                  <li className="list-none"><i className="text-white text-2xl fab fa-twitter hover:text-ntst-grey cursor-pointer"></i></li>
                  <li className="list-none"><i className="text-white text-2xl fab fa-facebook hover:text-ntst-grey cursor-pointer"></i></li>
              </div>
          </div>
      </footer>
    </>
  )
}

export default HomePage
