export default function Contact() {
    return <>
        <form className="form">
            <label>Name</label>
            <input type='text' />
            <label>Surname</label>
            <input type='text' />
            <label>Email</label>
            <input type='email' />
            <label>Comment</label>
            <textarea></textarea>
            <input type="submit" value='Send' />
        </form>
    </>
}