function customreact(reactelement, container){
    const domElement = document.createElement(reactelement.type)
    domElement.innerHTML = reactelement.children
    // domElement.setAttribute('href', reactelement.props.href)
    // domElement.setAttribute('target', reactelement.props.target)
    for (const prop in reactelement.props) {
        if(prop == reactelement.children) continue;
       domElement.setAttribute(prop,reactelement.props[prop])
        
    }
    container.appendChild(domElement)
}
const reactelement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children : 'CLick me'
}
const maincontainer = document.querySelector('#root');

customreact(reactelement, maincontainer);
