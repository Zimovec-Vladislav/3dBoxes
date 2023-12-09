const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big')) //Изменяет css-свойство элемента boxes на свойства класса big

createBoxes = () => {
    for (let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            const box = document.createElement('div') //Создает 16 div-элементов 4x4
            box.classList.add('box') // Элементу div добавляет css-свойства класса box
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            boxesContainer.appendChild(box) // Добавляет div-box к основному div-boxes
        }
    }
}

createBoxes()