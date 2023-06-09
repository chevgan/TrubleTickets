import moment from 'moment';
import s from "../components/content/Tickets/Tickets.module.css";


const ADD_TICKETS = 'ADD_TICKETS';
const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
let initialState = {
    ticket: [
        {
            id: 0,
            siteName: "6667 ALMATY",
            clientName: "K-cell",
            ticketData: "2023-03-10",
            downTime: "2 часа 6 минут",
            employeeName: "Данил Чевган",
            responsiblePerson: "Дежурный NOC",
            statusTicket: false,
            description: "Описание ",
            diagnostics: "Диагностика ",
            reason: "Причина ",
            dateReceived: "",
            /*dateReceived: moment(''),*/
            editable: true,
        },
    ],
    employeeName: [
        {name: "Бакаенко А.", value: "bakaenko"},
        {name: "Азимбеов Е.", value: "azimbeov"},
        {name: "Чевган Д.", value: "chevgan"},
        {name: "Чанышев И.", value: "chanyshev"},
    ],
    responsiblePerson: [
        {name: "Дежурный NOC"},
        {name: "Антон"},
    ],
    siteName: [
        {name: "6667 ALMATY", client: "K-cell", editable: true},
        {name: "KAZAKHTelecom", client: "Tele 2", editable: true},
    ]
}
export const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TICKETS:
            return {
                ...state,
                ticket: [...state.ticket, action.payload],

            }
        case UPDATE_DESCRIPTION:
            return {
                ...state,
                description: action.payload
            };
        default:
            return state;
    }
}


