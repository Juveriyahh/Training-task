package com.mindsprint.jdbc.project;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.Scanner;

public class BatchUpdate {
    public static void main(String[] args) {
        try (Connection connection = DBConfig.getConnection();
        Scanner sc =new Scanner(System.in)) {

            String sql = "insert into employee(name,email) values(?,?)";
            PreparedStatement stmt = connection.prepareStatement(sql);
            while(true) {
                System.out.println("Enter name:");
                String name = sc.nextLine();
                System.out.println("Enter email:");
                String email = sc.nextLine();
                stmt.setString(1, name);
                stmt.setString(2, email);
                stmt.addBatch();
                System.out.println("Enter 1 to stop:");
                if (sc.nextLine().equals("1")) break;
            }
                int[] records=stmt.executeBatch();
            System.out.println(records.length+"records inserted in db");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
