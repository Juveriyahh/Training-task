package com.mindsprint.jdbc.project;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.List;

public class EmployeeDAOImpl implements EmployeeDAO{

    @Override
    public int addEmployee(Employee employee) {
        int result=0;
        try(Connection connection=DBConfig.getConnection()){
            String sql="insert into employee (name,email) values(?,?)";
            PreparedStatement pst=connection.prepareStatement(sql);
            pst.setString(1, employee.getName());
            pst.setString(2, employee.getEmail());
            result= pst.executeUpdate();

        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public void getAllEmployees() {
        try(Connection connection=DBConfig.getConnection()){
            String sql="select * from employee";
            Statement stmt=connection.prepareStatement(sql);
            ResultSet set=stmt.executeQuery(sql);
            while(set.next()){
                System.out.println(set.getInt(1)+" "+set.getString(2)+" "
                +set.getString(3));
            }

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public void deleteEmployee(int id) {
        try(Connection connection=DBConfig.getConnection()){
            String sql="delete from employee where id=?";
            PreparedStatement stmt=connection.prepareStatement(sql);
            stmt.setInt(1,id);
            if(stmt.executeUpdate()>0){
                System.out.println("Employee Deleted");
            }else
                System.out.println("Employee Not Found");

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public void updateEmployee(String name, int id) {
        try(Connection connection=DBConfig.getConnection()){
            String sql="update employee set name=? where id=?";
            PreparedStatement stmt=connection.prepareStatement(sql);
            stmt.setString(1,name);
            stmt.setInt(2,id);
            if(stmt.executeUpdate()>0){
                System.out.println("Employee Updated");
            }else
                System.out.println("Employee Not Found");

        }catch (Exception e){
            e.printStackTrace();
        }

    }

}
