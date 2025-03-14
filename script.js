import { guests } from './guest.js';

const rooms = document.querySelector('.rooms');
const s = './assets/safetyicon.webp';
const i = './assets/identityicon.webp';

guests.forEach(g => {
    rooms.innerHTML += `
        <div class="bg-white w-96 lg:w-72 mx-4 mb-8 rounded-2xl shadow-3xl duration-300 border border-gray-300 hover:border-black lg:hover:scale-110 transform-gpu grid justify-center cursor-pointer" style="max-width:360px">
            <div class='header p-2 flex gap-1 items-center container'>
                <img class="rounded-full h-16" src="${g.avatar}">
                <div class='bg-white w-full text-left h-full grid'>
                    <div class="flex items-center">
                        <span class="font-bold text-lg">${g.name}</span>
                        <span class="flex gap-1 mx-2 items-center">
                            ${(g.safety) ? ` <img class="w-4" src="${s}"> `:''}
                            ${(g.identity) ? ` <img class="w-5" src="${i}"> `:''}
                        </span>
                        <span class="text-gray-500 font-bold">. ${g.age}</span>
                    </div>
                    <div class='flex items-center gap-2 text-xs'>
                        <span class="text-green-900 bg-green-100 py-1 px-2">${g.arrival}</span>
                        <span class="text-blue-900 bg-blue-100 py-1 px-2 rounded-lg">${g.roommate}</span>
                    </div>
                </div>
            </div>
            <div role='body' class="bg-black py-4"> ${g.propertyImg} </div>
            <div role='footer' class="mx-2 pb-4 mt-2 px-2 mb-4 text-left grid">
                <span class='text-xl font-bold'>$${g.priceTag}</span>
                <span>${g.propertyType}</span>
                <span>${g.date}</span>
                <span>${g.location}</span>
            </div>
        </div>
    `;
});