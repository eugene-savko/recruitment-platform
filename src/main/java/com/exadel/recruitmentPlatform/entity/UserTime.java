package com.exadel.recruitmentPlatform.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user_time", schema = "public")
public class UserTime extends BaseEntity {

    @Column(name = "start_date_time")
    private LocalDateTime startDateTime;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private SlotStatus status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public UserTime(LocalDateTime startDateTime, SlotStatus status) {
        this.startDateTime = startDateTime;
        this.status = status;
    }
}
