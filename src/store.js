import { reactive } from 'vue';

export const store = reactive({
    cardsList: [],
    searchText: "",
    archetypeList: ['Alien', 'Laval', 'Vylon', 'Inzektor', 'Umi', 'Gusto'],
    selectedValue: "",
});
