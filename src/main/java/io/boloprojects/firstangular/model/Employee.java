package io.boloprojects.firstangular.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class Employee  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private String email;
    private String jobTitle;
    private String phone;
    @Column(length = 512)
    private String imageUrl;
    @Column(nullable = false, updatable = false)
    private String eCode;
}
