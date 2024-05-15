// ========================= AutoComplate search ==============================

let availabelkeywords=[
    'Lead generation','Lead Management','Lead Generation Campaigns','Lead Generation Tools','Lead Harvesting','CRM Implementation and Design',
    'Digital Marketing','Search Engine Optimization (SEO)','Search Engine Marketing (SEM)','Content Marketing ','Social Media Marketing','Email Marketing','Influencer Marketing','Affiliate Marketing','Display Marketing','Mobile Marketing (Whatsapp, Telegram, Signal)','Website Marketing',
    ,'Social Media - Facebook. Instagram, Twitter, linkedin,Pinterest and many morea','Social Media Strategy development','Content creation and curation','Social media account creation and management','Social media advertising','Community management','Social media analytics and measurement','Social media campaigns','Social media Automation','Social Media customer service',
    'Tele Calling Services','Lead generation','Appointment setting, order taking ','Telemarketing','Tele-support','Outbound calls, inbound calls','Call center services','Voice broadcasting','Outbound lead generation',
    'Content Writing','SEO Content Writing','Blog writing','Article writing','Email writing','Technical writing','Social media writing','Website Content writing','Translation','Press Release Writing',
    'Website Development','Website design','Content Management System (CMS)','E-commerce Development','Responsive design','SEO','Website Traffic Service ',
    'Dtp Design And Printing','Graphic, layout, Digital design','Photo editing','Color correction',
    'Online Reputation Management','Online Reputation monitoring','SEO Reputation Management','Online Reputation Repair','Reputation audit','Reputation scorecard',
    'Video Editing','Learning And Development','Build Your Marketing Strategy/Relaunch',
];
const resultBox = document.querySelector(".result-box");
const input = document.getElementById("input");
var heroSection= document.querySelector('.hero-section');
var heroSectionBtn= heroSection.querySelector('.nav-menu-btn-container');
console.log(heroSectionBtn)

input.onkeyup = function(){
    let result=[];
    let inputval= input.value;
    if(inputval.length){
        result = availabelkeywords.filter((keyword)=>{
            return keyword.toLocaleLowerCase().includes(inputval.toLocaleLowerCase());
        })
        // console.log(result)
    }
    display(result);
    if(!result.length){
        resultBox.innerHTML='';
    }
}

function display(resultparameter){
    const content= resultparameter.map((list)=>{
        console.log(list)
        return "<li onclick=selectInput(this)>" +list+"</li>"
    })
    resultBox.innerHTML= "<ul>" + content.join('') + "</ul>";
}
function selectInput(list){
    input.value=list.innerHTML;
    resultBox.innerHTML=''
    heroSectionBtn.style.display="block";
}