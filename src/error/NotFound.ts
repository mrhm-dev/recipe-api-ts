class NotFound extends Error {
	public status: number;

	constructor(message: string) {
		super(message);
		this.status = 404;
	}
}

export default NotFound;
