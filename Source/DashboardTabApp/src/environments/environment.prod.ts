export const environment = {
    production: false,
    apiBaseUrl: "https://schoolsnswuatqbot.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "c6198395-22e6-4778-9809-ac8dcfd76901",
        clientId: "e140df66-1580-4a99-bf40-b1a5687aab85",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
