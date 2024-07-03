import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const initialCustomers = [
  { name: "John", surname: "Doe", phone: "123-456-7890", email: "john.doe@example.com", leftEye: { sfera: "", cylinder: "", os: "", pd: "" }, rightEye: { sfera: "", cylinder: "", os: "", pd: "" } },
  { name: "Jane", surname: "Smith", phone: "987-654-3210", email: "jane.smith@example.com", leftEye: { sfera: "", cylinder: "", os: "", pd: "" }, rightEye: { sfera: "", cylinder: "", os: "", pd: "" } },
];

const CustomerList = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState("");
  const [newCustomer, setNewCustomer] = useState({ name: "", surname: "", phone: "", email: "", leftEye: { sfera: "", cylinder: "", os: "", pd: "" }, rightEye: { sfera: "", cylinder: "", os: "", pd: "" } });
  const [editCustomer, setEditCustomer] = useState(null);

  const filteredCustomers = customers.filter(customer =>
    Object.values(customer).some(value =>
      typeof value === 'string' ? value.toLowerCase().includes(searchTerm.toLowerCase()) : Object.values(value).some(subValue => subValue.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  );

  const handleAddCustomer = () => {
    setCustomers([...customers, newCustomer]);
    setNewCustomer({ name: "", surname: "", phone: "", email: "", leftEye: { sfera: "", cylinder: "", os: "", pd: "" }, rightEye: { sfera: "", cylinder: "", os: "", pd: "" } });
  };

  const handleEditCustomer = (index) => {
    setEditCustomer({ ...customers[index], index });
  };

  const handleSaveEditCustomer = () => {
    const updatedCustomers = [...customers];
    updatedCustomers[editCustomer.index] = { ...editCustomer };
    delete updatedCustomers[editCustomer.index].index;
    setCustomers(updatedCustomers);
    setEditCustomer(null);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Customer List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mr-2"
            />
            <Dialog>
              <DialogTrigger asChild>
                <Button>Add Customer</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Customer</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={newCustomer.name}
                      onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="surname">Surname</Label>
                    <Input
                      id="surname"
                      value={newCustomer.surname}
                      onChange={(e) => setNewCustomer({ ...newCustomer, surname: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={newCustomer.phone}
                      onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      value={newCustomer.email}
                      onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Left Eye</Label>
                    <div className="space-y-2">
                      <div>
                        <Label htmlFor="leftEyeSfera">Sfera</Label>
                        <Input
                          id="leftEyeSfera"
                          value={newCustomer.leftEye.sfera}
                          onChange={(e) => setNewCustomer({ ...newCustomer, leftEye: { ...newCustomer.leftEye, sfera: e.target.value } })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="leftEyeCylinder">Cylinder</Label>
                        <Input
                          id="leftEyeCylinder"
                          value={newCustomer.leftEye.cylinder}
                          onChange={(e) => setNewCustomer({ ...newCustomer, leftEye: { ...newCustomer.leftEye, cylinder: e.target.value } })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="leftEyeOs">Oś</Label>
                        <Input
                          id="leftEyeOs"
                          value={newCustomer.leftEye.os}
                          onChange={(e) => setNewCustomer({ ...newCustomer, leftEye: { ...newCustomer.leftEye, os: e.target.value } })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="leftEyePd">PD</Label>
                        <Input
                          id="leftEyePd"
                          value={newCustomer.leftEye.pd}
                          onChange={(e) => setNewCustomer({ ...newCustomer, leftEye: { ...newCustomer.leftEye, pd: e.target.value } })}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Label>Right Eye</Label>
                    <div className="space-y-2">
                      <div>
                        <Label htmlFor="rightEyeSfera">Sfera</Label>
                        <Input
                          id="rightEyeSfera"
                          value={newCustomer.rightEye.sfera}
                          onChange={(e) => setNewCustomer({ ...newCustomer, rightEye: { ...newCustomer.rightEye, sfera: e.target.value } })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="rightEyeCylinder">Cylinder</Label>
                        <Input
                          id="rightEyeCylinder"
                          value={newCustomer.rightEye.cylinder}
                          onChange={(e) => setNewCustomer({ ...newCustomer, rightEye: { ...newCustomer.rightEye, cylinder: e.target.value } })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="rightEyeOs">Oś</Label>
                        <Input
                          id="rightEyeOs"
                          value={newCustomer.rightEye.os}
                          onChange={(e) => setNewCustomer({ ...newCustomer, rightEye: { ...newCustomer.rightEye, os: e.target.value } })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="rightEyePd">PD</Label>
                        <Input
                          id="rightEyePd"
                          value={newCustomer.rightEye.pd}
                          onChange={(e) => setNewCustomer({ ...newCustomer, rightEye: { ...newCustomer.rightEye, pd: e.target.value } })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setNewCustomer({ name: "", surname: "", phone: "", email: "", leftEye: { sfera: "", cylinder: "", os: "", pd: "" }, rightEye: { sfera: "", cylinder: "", os: "", pd: "" } })}>Cancel</Button>
                    <Button onClick={handleAddCustomer}>Save</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Surname</th>
                <th className="py-2">Phone</th>
                <th className="py-2">Email</th>
                <th className="py-2">Left Eye Sfera</th>
                <th className="py-2">Left Eye Cylinder</th>
                <th className="py-2">Left Eye Oś</th>
                <th className="py-2">Left Eye PD</th>
                <th className="py-2">Right Eye Sfera</th>
                <th className="py-2">Right Eye Cylinder</th>
                <th className="py-2">Right Eye Oś</th>
                <th className="py-2">Right Eye PD</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2">{customer.name}</td>
                  <td className="py-2">{customer.surname}</td>
                  <td className="py-2">{customer.phone}</td>
                  <td className="py-2">{customer.email}</td>
                  <td className="py-2">{customer.leftEye.sfera}</td>
                  <td className="py-2">{customer.leftEye.cylinder}</td>
                  <td className="py-2">{customer.leftEye.os}</td>
                  <td className="py-2">{customer.leftEye.pd}</td>
                  <td className="py-2">{customer.rightEye.sfera}</td>
                  <td className="py-2">{customer.rightEye.cylinder}</td>
                  <td className="py-2">{customer.rightEye.os}</td>
                  <td className="py-2">{customer.rightEye.pd}</td>
                  <td className="py-2">
                    <Button variant="outline" size="sm" onClick={() => handleEditCustomer(index)}>Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {editCustomer && (
        <Dialog open={editCustomer !== null} onOpenChange={() => setEditCustomer(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Customer</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="editName">Name</Label>
                <Input
                  id="editName"
                  value={editCustomer.name}
                  onChange={(e) => setEditCustomer({ ...editCustomer, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="editSurname">Surname</Label>
                <Input
                  id="editSurname"
                  value={editCustomer.surname}
                  onChange={(e) => setEditCustomer({ ...editCustomer, surname: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="editPhone">Phone</Label>
                <Input
                  id="editPhone"
                  value={editCustomer.phone}
                  onChange={(e) => setEditCustomer({ ...editCustomer, phone: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="editEmail">Email</Label>
                <Input
                  id="editEmail"
                  value={editCustomer.email}
                  onChange={(e) => setEditCustomer({ ...editCustomer, email: e.target.value })}
                />
              </div>
              <div>
                <Label>Left Eye</Label>
                <div className="space-y-2">
                  <div>
                    <Label htmlFor="editLeftEyeSfera">Sfera</Label>
                    <Input
                      id="editLeftEyeSfera"
                      value={editCustomer.leftEye.sfera}
                      onChange={(e) => setEditCustomer({ ...editCustomer, leftEye: { ...editCustomer.leftEye, sfera: e.target.value } })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="editLeftEyeCylinder">Cylinder</Label>
                    <Input
                      id="editLeftEyeCylinder"
                      value={editCustomer.leftEye.cylinder}
                      onChange={(e) => setEditCustomer({ ...editCustomer, leftEye: { ...editCustomer.leftEye, cylinder: e.target.value } })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="editLeftEyeOs">Oś</Label>
                    <Input
                      id="editLeftEyeOs"
                      value={editCustomer.leftEye.os}
                      onChange={(e) => setEditCustomer({ ...editCustomer, leftEye: { ...editCustomer.leftEye, os: e.target.value } })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="editLeftEyePd">PD</Label>
                    <Input
                      id="editLeftEyePd"
                      value={editCustomer.leftEye.pd}
                      onChange={(e) => setEditCustomer({ ...editCustomer, leftEye: { ...editCustomer.leftEye, pd: e.target.value } })}
                    />
                  </div>
                </div>
              </div>
              <div>
                <Label>Right Eye</Label>
                <div className="space-y-2">
                  <div>
                    <Label htmlFor="editRightEyeSfera">Sfera</Label>
                    <Input
                      id="editRightEyeSfera"
                      value={editCustomer.rightEye.sfera}
                      onChange={(e) => setEditCustomer({ ...editCustomer, rightEye: { ...editCustomer.rightEye, sfera: e.target.value } })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="editRightEyeCylinder">Cylinder</Label>
                    <Input
                      id="editRightEyeCylinder"
                      value={editCustomer.rightEye.cylinder}
                      onChange={(e) => setEditCustomer({ ...editCustomer, rightEye: { ...editCustomer.rightEye, cylinder: e.target.value } })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="editRightEyeOs">Oś</Label>
                    <Input
                      id="editRightEyeOs"
                      value={editCustomer.rightEye.os}
                      onChange={(e) => setEditCustomer({ ...editCustomer, rightEye: { ...editCustomer.rightEye, os: e.target.value } })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="editRightEyePd">PD</Label>
                    <Input
                      id="editRightEyePd"
                      value={editCustomer.rightEye.pd}
                      onChange={(e) => setEditCustomer({ ...editCustomer, rightEye: { ...editCustomer.rightEye, pd: e.target.value } })}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setEditCustomer(null)}>Cancel</Button>
                <Button onClick={handleSaveEditCustomer}>Save</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default CustomerList;