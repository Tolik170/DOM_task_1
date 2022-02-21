const first = () => {
    const list = document.querySelectorAll('#list li');
    const listItems = [];
    let result = [];

    for (l of list) {
        listItems.push(l.innerHTML);
    }
    const reversedListItems = [...listItems].reverse();

    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i] !== reversedListItems[i]) {
            result.push(listItems[i]);
            result.push(reversedListItems[i]);
        }
        else {
            result.push(listItems[i]);
            break;
        }
    }
    console.log(`first method:`)
    console.log(`${result}`);
}

const second = () => {
    const list = document.getElementsByTagName('li');
   // const listItems = Object.values(list)
    let listItems = []
    for(let i = 0; i < list.length; i++) {
        listItems.push(list[i].innerHTML);
    }
    console.log(`second method:`)
    console.log(listItems[0], listItems[4], listItems[1], listItems[3], listItems[2])
    
}


first();
second();
