
const Card = () => {

    const data = [
        {
            image: "https://static.startuptalky.com/2022/06/Amazon-StartupTalky.jpg",
            name: "Amazon ",
            description: "This is the online plateform for shopping any electronics gadgets and fashion accesries.",
            inStock: true
        },
        {
            image: "https://play-lh.googleusercontent.com/0-sXSA0gnPDKi6EeQQCYPsrDx6DqnHELJJ7wFP8bWCpziL4k5kJf8RnOoupdnOFuDm_n=s256-rw",
            name: "Flipkart",
            description: "This is the online plateform for shopping and entertenment plateform.",
            inStock: false
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1vrelDqUZGSI42861yaqtHNJ4XiVhMfGzvqDzhMNGIYkIWIGlYsd7IV6rsoUOVODegs&usqp=CAU",
            name: "Nayka",
            description: "This is online paltefrom for beauty product",
            inStock: false
        },
    ]

    return (
        <div className=" w-full h-screen flex gap-10 justify-center items-center ">

            {data.map((elem, index) => (
                <div key={index} className="w-55 h-70 rounded bg-gray-200  overflow-hidden">
                    <div className="w-full h-[47%] ">
                        <img className="w-full h-full  object-cover " src={elem.image} alt="" />
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl  font-medium">{elem.name}</h2>
                        <p className="text-[14px]  mt-1  ">{elem.description}</p>
                        <button className={`px-4 py-1 text-white font-semibold ${elem.inStock ?"bg-blue-600" :"bg-red-500"} text-xs rounded active:scale-95`}>{elem.inStock ? "inStock" :"Out of Stock"}</button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Card