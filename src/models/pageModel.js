export function fromRecord(record){
return {
    navBarTitle: (record?.NavBarTitle) ?? "Palestine",
    pageTitle: (record?.PageTitle) ?? "Palestine",
    description:(record?.PageDescription) ?? "Palestine"
};
}