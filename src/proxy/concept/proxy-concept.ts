interface ISubject {
	request(): void
}

class Subject implements ISubject {
	enormousData: number[]

	constructor() {
		this.enormousData = [1, 2, 3]
	}

	request(): number[] {
		return this.enormousData
	}
}

class ProxySubject implements ISubject {
	enormousData: number[]
	subject: Subject

	constructor() {
		this.enormousData = []
		this.subject = new Subject()
	}

	request(): number[] {
		if (this.enormousData.length === 0) {
			console.log(`pulling data from subject`)
			this.enormousData = this.subject.request()

			return this.enormousData
		}

		console.log(`pulling data from proxy cache`)

		return this.enormousData
	}
}

const proxySubject = new ProxySubject()
console.log(proxySubject.request())
console.log(proxySubject.request())