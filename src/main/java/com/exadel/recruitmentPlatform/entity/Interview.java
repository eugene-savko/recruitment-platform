package com.exadel.recruitmentPlatform.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "interview", schema = "public")
public class Interview extends BaseEntity{

    @Column(name = "feedback")
    private String feedback;

    //TODO this is a temporary solution, in the future we need store english_level in table mark
    //TODO: 14.05.2021  @OneToOne
    @Column(name = "english_level")
    private Long englishLevel;

    @ManyToOne
    @JoinColumn(name = "to_user_id")
    private User toUser;

    @ManyToOne
    @JoinColumn(name = "from_user_id")
    private User fromUser;

    @Column(name = "internship_id")
    private Long internshipId;

    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "user_time_id")
    private UserTime userTime;

}