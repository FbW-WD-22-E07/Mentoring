

const about = document.getElementById('about');
console.log(about);
/** change style */
about.style.fontWeight = 'bolder';
about.style.color = '#555';


const weeks = document.getElementsByClassName('weeks');
console.log(weeks);
/** change style */
for (i = 0; i < weeks.length; i++){
    weeks[i].style.color = 'skyblue';
    weeks[i].style.listStyleType = 'none';
    weeks[i].style.marginBottom = '0.5em';
}


const headings = document.getElementsByTagName('h1');
console.log(headings);
/** change text */
for (let j = 0; j < headings.length; j++) {
    headings[j].innerText = "=> " + headings[j].innerText;    
}


const instructors = document.querySelector('section#instructors');
console.log(instructors)
/** change html */
instructors.innerHTML = instructors.innerHTML + '<hr />'


const sections = document.querySelectorAll('section');
console.log(sections);
/** child nodes */
for (let n = 0; n < sections.length; n++) {
    console.log(sections[n].childNodes)
    
    /** first child node */
    console.log(sections[n].firstChild)
    
}


const header = document.querySelector('header');
console.log(header.parentElement)
console.log(header.parentNode)
console.log(header.children)
console.log(header.childNodes)