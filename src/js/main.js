const paintSkill = () => {
    const colors = ['B0E5F0', 'B0F0BE', 'EFF0B0', 'F0BCB0', 'F0B0EA', 'B1B0F0', 'D4D4D4']
    const rows = document.querySelectorAll('.skills ul')
    rows.forEach((row, i)=>{
        const liss = row.querySelectorAll('li')
        liss.forEach(li=>{
            li.style.backgroundColor = '#'+colors[i]
        })
    })
}

paintSkill()