function creategrids() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 16; i++) {

        const row = document.createElement('div');
        row.classList.add("row");
        for (let index = 0; index < 16; index++) {
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
            column.addEventListener('mouseenter', function () {
              
                column.style.backgroundColor = `black`;
              
              
            })
        }
        container.appendChild(row);

    }
}
creategrids();
const button = document.querySelector('button');
button.addEventListener('click', function () {

    let n;
    do {
        n = parseInt(prompt("Enter the square grid number that you want that is not more than 100"));

        if (n > 100 || n < 0 ) {
        alert('wrong value')
    }
} while (n > 100 || n < 0);
const container = document.querySelector('.container');
const row = document.querySelectorAll('.row');
row.forEach((row) => {
    container.removeChild(row)
})
for (let i = 0; i < n; i++) {
    const container = document.querySelector('.container');
    const row = document.createElement('div');
    row.classList.add("row");
    for (let index = 0; index < n; index++) {
        const column = document.createElement('div');
        column.classList.add('column');
        row.appendChild(column);
        column.addEventListener('mouseenter', function () {
            column.style.backgroundColor = "black";
        })
    }
    container.appendChild(row);
}





    }
)

