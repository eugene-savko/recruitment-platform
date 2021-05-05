package com.exadel.recruitmentPlatform.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "status", schema = "public")
public class InternshipRequestStatusEntity extends BaseEntity {

    @Column(name = "name")
    private InternshipRequestStatus name;

}
