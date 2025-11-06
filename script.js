function handle_input() {
    const input_text=document.getElementById('input-text');
    const search_input=input_text.value;
    show_data(search_input);
    

}
const show_data=async  (search_text)=>{
const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${search_text}`);
const data=await res.json();


show_data2(data.data);

}
const show_data2 = (search_data) => {
  console.log(search_data);

  const main_card = document.getElementById('main_card');
  main_card.innerHTML = ''; 
  

  search_data.forEach((phone) => {
    console.log(phone);

    const single_card = document.createElement('div');
    single_card.classList.add('card');
    single_card.innerHTML = `
        <div class="card-img">
            <img src=${phone.image} alt="${phone.name}">
        </div>
        <h2 style="text-align:center;">${phone.phone_name}</h2>
        <p>There are many variations of passages available, but the majority have suffered</p>
        <h2 style="text-align:center;">$${phone.price}</h2>
        <div><button class="btn">Show Details</button></div>
    `;

    
    main_card.appendChild(single_card);
  });
};
