type User = {
  username: string;
};

type Admin = {
  role: "admin";
};

type AdminUser = User & Admin;

const admin: AdminUser = {
  username: "superadmin",
  role: "admin"
};

console.log(`${admin.username} has role ${admin.role}`);
// superadmin has role admin
