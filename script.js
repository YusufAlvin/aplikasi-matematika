const container = document.querySelector('.container')
container.addEventListener('click', function(e){
	if(e.target.classList.contains("hitung-luas-persegi-panjang")){
		const panjang = document.querySelector('.panjang-persegi-panjang').value
		const lebar = document.querySelector('.lebar-persegi-panjang').value	
		luasPersegiPanjang(panjang, lebar)
	}
	if(e.target.classList.contains("hitung-luas-persegi")){
		const sisi = document.querySelector('.sisi-persegi').value
		luasPersegi(sisi)
	}
	if(e.target.classList.contains("btn-close")){
		e.target.parentElement.classList.add("d-none")
	}
})

function luasPersegiPanjang(panjang, lebar){
	if(panjang == "" || lebar == ""){
		const alert = document.querySelector('.alert-persegi-panjang')
		alert.classList.remove("d-none")
	} else {
		const hasilLuasPersegiPanjang = document.querySelector('.hasil-luas-persegi-panjang')
		let hasilKali = panjang * lebar
		hasilLuasPersegiPanjang.innerHTML = 'Hasil = ' + hasilKali
	}
}

function luasPersegi(sisi){
	if(sisi == ""){
		const alert = document.querySelector('.alert-persegi')
		alert.classList.remove("d-none")
	} else {
		const hasilLuasPersegi = document.querySelector('.hasil-luas-persegi')
		let hasilKali = Math.pow(sisi, 2)
		hasilLuasPersegi.innerHTML = 'Hasil = ' + hasilKali
	}
}