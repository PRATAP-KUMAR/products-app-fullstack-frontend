const Furniture = () => {
    return (
        <fieldset>
            <div className="bg-lite p-5">
                <div className="flex flex-col space-y-5">
                    <input
                        type="number"
                        min={1}
                        placeholder="Height in CMs"
                        id="height"
                        name="height"
                    />
                    <input
                        type="number"
                        min={1}
                        placeholder="Width in CMs"
                        id="width"
                        name="width"
                    />
                    <input
                        type="number"
                        min={1}
                        placeholder="Length in CMs"
                        id="length"
                        name="length"
                    />
                </div>
                <p className="information">Please provide dimensions in CM&quot;s in HxWxL format</p>
            </div>
        </fieldset>
    )
}

export default Furniture;