const Dvd = () => {
    return (
        <fieldset>
            <div className="bg-lite p-5">
                <div className="flex flex-col space-y-5">
                    <input
                        type="number"
                        min={1}
                        placeholder="Size"
                        id="size"
                        name="size"
                    />
                </div>
                <p className="information">Please provide Disc size in MB</p>
            </div>
        </fieldset>
    )
}

export default Dvd;