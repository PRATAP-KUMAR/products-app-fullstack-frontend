const Dvd = (props) => {
    const obj = props;
    const { handleChange } = obj;
    return (
        <fieldset>
            <div className="bg-lite p-5">
                <div className="flex flex-col space-y-5">
                    <input
                        type="number"
                        min={1}
                        placeholder="#size"
                        id="size"
                        name="size"
                        onChange={handleChange}
                    />
                </div>
                <p className="information">Please provide size in MB</p>
            </div>
        </fieldset>
    )
}

export default Dvd;