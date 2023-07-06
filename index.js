var box = document.getElementById('box')
var add_btn = document.getElementById('add_btn')
var task = box.innerHTML
var list = document.getElementById('list2')
var list1 = document.getElementById('list1')

var count = 1

function additem() {

    if (box.value.trim() === '') {
        add_btn.disabled
    }
    else {

        var num = count++


        num === count
        var newElement = document.createElement('li')
        var newnum = "new" + num

        newElement.id = newnum
        var buttonContainer = document.getElementById('btn_container');

        var newButton1 = document.createElement('button');
        newButton1.textContent = '\u2714\uFE0F'
        var newButton2 = document.createElement('button');
        newButton2.textContent = '❌'
        var nid1 = "nbtn" + num
        var nid2 = "nbtn" + num
        newButton1.id = nid1
        newButton2.id = nid2




        newButton1.classList.add('appear-animation')
        newButton1.classList.add('br')
        newButton1.classList.add('appear-animation')

        newButton2.classList.add('appear-animation')
        newButton2.classList.add('br')
        newButton2.classList.add('appear-animation')


        newElement.appendChild(newButton2)

        var onlybutton1 = newElement


        var item = box.value


        var text = document.createTextNode(item)



        var onlytext = newElement.appendChild(text)
        newElement.appendChild(text)
        newElement.classList.add("list-group-item")
        newElement.classList.add('appear-animation')
        newElement.classList.add('br')


        console.log(nid1.substr(4))
        console.log(newnum.substr(3))

        // newElement.style.color="white"
        newElement.style.padding = "5px"
        newElement.appendChild(newButton1)

        list.appendChild(newElement)

        box.value = ''

        newButton2.addEventListener("click", function () {
            var abcd = newButton2.id

            var re = document.getElementById('')
            list1.removeChild(newElement)



        })
        newButton1.addEventListener("click", function () {
            var abcd = newButton1.id

            newElement.removeChild(newButton1)
            list1.append(newElement)

            var re = document.getElementById('')
            list.removeChild(newElement)




        })
        newButton2.addEventListener("click", function () {
            var abcd = newButton2.id

            var re = document.getElementById('')
            list.removeChild(newElement)



        })

    }

}

add_btn.addEventListener("click", additem)












































