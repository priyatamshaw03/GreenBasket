import React from 'react'

const Testimonial = () => {
  const testimonials = [
        { id: 1, name: "Akshay Gupta", address: "Kolkata, WB", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "This service has truly changed the way I shop. I even get reminders and personalized suggestions. Plus, great deals and discounts every time! Try it once." },
        { id: 2, name: "Rahul Kumar", address: "Patna, Bihar", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "No more long queues or traffic! I place my order in minutes, and it arrives at my doorstep within hours. Everything is well-packed and neatly delivered. Highly recommend!" },
        { id: 3, name: "Aditi Singh", address: "Kolkata, WB", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 4, review: "Absolutely love this service! The groceries are always fresh, the delivery is on time, and the app is super easy to use. It has made my weekly shopping hassle-free!" }
    ];

    const Star = ({ filled }) => (
        <svg className="w-4 h-4 text-yellow-400" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z" />
        </svg>
    );

    return (
        <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 pt-20 pb-30">
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl md:text-[40px] font-bold">What Our Customers Say</h1>
                <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-[696px]">Hear what our customers say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6 mt-20 mb-10">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow max-w-xs">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <Star key={index} filled={testimonial.rating > index} />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonial