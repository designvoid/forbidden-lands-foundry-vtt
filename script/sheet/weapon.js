export class ForbiddenLandsWeaponSheet extends ItemSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["forbidden-lands", "sheet", "item"],
            template: "systems/forbidden-lands/model/weapon.html",
            width: 600,
            height: 400,
            resizable: false
        });
    }

    getData() {
        const data = super.getData();
        console.log(data);
        return data;
    }

    activateListeners(html) {
        super.activateListeners(html);
    }
}
