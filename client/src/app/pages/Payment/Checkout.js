import React from 'react'

const Checkout = () => {
  return (
    <div class="container mx-auto p4-10">
    <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
        <div class="md:flex">
            <div class="w-full px-6 py-8 md:p-8">
                <h2 class="text-2xl font-bold text-gray-800">Checkout</h2>
                <p class="mt-4 text-gray-600">Please fill out the form below to complete your booking.</p>
                <form class="mt-5">
                    <div class="mb-3">
                        <label class="block text-gray-800 font-bold mb-2" for="name">
                            Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"/>
                    </div>
                    <div class="mb-3">
                        <label class="block text-gray-800 font-bold mb-2" for="email">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                        <label class="block text-gray-800 font-bold mb-2" for="card_number">
                            Card Number
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card_number" type="text" placeholder="**** **** **** 1234"/>
                    </div>
                    <div class="mb-3">
                        <label class="block text-gray-800 font-bold mb-2" for="expiration_date">
                            Expiration Date
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="expiration_date" type="date" placeholder="MM / YY"/>
                    </div>
                    <div class="mb-5">
                        <label class="block text-gray-800 font-bold mb-2" for="cvv">
                            CVV
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cvv" type="text" placeholder="***"/>
                    </div>
                    <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Checkout
