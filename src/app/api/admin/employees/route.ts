import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const employeesPath = path.join(process.cwd(), 'src/data/employees.json');

// GET - Fetch all employees
export async function GET() {
  try {
    const data = fs.readFileSync(employeesPath, 'utf8');
    const employees = JSON.parse(data);
    return NextResponse.json({ success: true, employees });
  } catch (error) {
    return NextResponse.json({ success: false, employees: [] });
  }
}

// POST - Create new employee
export async function POST(request: Request) {
  try {
    const newEmployee = await request.json();
    const data = fs.readFileSync(employeesPath, 'utf8');
    const employees = JSON.parse(data);
    
    const employee = {
      id: Date.now().toString(),
      ...newEmployee,
      createdAt: new Date().toISOString(),
    };
    
    employees.push(employee);
    fs.writeFileSync(employeesPath, JSON.stringify(employees, null, 2));
    
    return NextResponse.json({ success: true, employee });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to create employee' }, { status: 500 });
  }
}

// PUT - Update employee
export async function PUT(request: Request) {
  try {
    const updatedEmployee = await request.json();
    const data = fs.readFileSync(employeesPath, 'utf8');
    let employees = JSON.parse(data);
    
    employees = employees.map((emp: any) => 
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
    
    fs.writeFileSync(employeesPath, JSON.stringify(employees, null, 2));
    
    return NextResponse.json({ success: true, employees });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to update employee' }, { status: 500 });
  }
}

// DELETE - Delete employee
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    const data = fs.readFileSync(employeesPath, 'utf8');
    let employees = JSON.parse(data);
    
    employees = employees.filter((emp: any) => emp.id !== id);
    
    fs.writeFileSync(employeesPath, JSON.stringify(employees, null, 2));
    
    return NextResponse.json({ success: true, employees });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to delete employee' }, { status: 500 });
  }
}
