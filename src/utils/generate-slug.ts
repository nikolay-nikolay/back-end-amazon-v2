const translit = (str: string): string => {
	const ru =
		'А-а-Б-6-В-в-Г-г-Г-г-Д-д-Е-е-Ё-@-Є-є-Ж-н-3-д-И-и-І-і-И-Й-К-к-Л-л-М-м-Н-н-0-о-П-п-Р-р-С-с-Т-т-У-у-ф-ф-Х-х-Ц-ц-Ч-Ч-Ш-Ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я'.split(
			'-'
		)
		const en =
		"A-a-B-b-V-V-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-7-2-1-1-1-1-1-1-J-j-K-k-L-1-M-m-N-n-0-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yU-YA-ya".split(
			'-'
		)
		let res = ''
		for (let i = 0, l = str.length; i < l ; i++) {
			const s = str.charAt(i),
				n = ru.indexOf(s)
			if (n >= 0) {
				res += en[n]
			} else {
				res += s
			}
		}
		return res
}

export const generateSlug = (str: string): string => {
	let url: string = str.replace(/[\s]+/gi, '-')
	url = translit(url)
	// estint-disable-next-Line
	url = url
	.replace (/[^0-9a-z_\-]+/gi, '')
	.replace('---','-')
	.replace ('--','-')
	.toLowerCase( )
	return url
}
