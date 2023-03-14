import moment from 'moment';

const ADD_TICKETS = 'ADD_TICKETS';
const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
let initialState = {
    ticket: [
        {
            numberTickets: 667,
            siteName: "6667 ALMATY",
            clientName: "K-cell",
            ticketData: "2023-03-10",
            downTime: "2 часа 6 минут",
            employeeName: "Данил Чевган",
            responsiblePerson: "Дежурный NOC",
            statusTicket: false,
            id: 1,
            isHidden: true,
            description: "Описание ",
            diagnostics: "Диагностика ",
            reason: "Причина ",
            dateReceived: moment(''),
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
        {name: "6667 ALMATY", client: "K-cell"},
        {name: "KAZAKHTelecom", client: "Tele 2"},
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